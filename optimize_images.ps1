
Add-Type -AssemblyName System.Drawing

# Path to images
$basePath = "d:\kongu\kec\src\assets\images\faculty images"

# Function to resize image
function Resize-Image {
    param (
        [string]$filePath
    )

    try {
        $image = [System.Drawing.Bitmap]::FromFile($filePath)
        
        # Target width 1000px (higher quality than 600px)
        if ($image.Width -gt 1000) {
            $newWidth = 1000
            $newHeight = [int]($image.Height * (1000 / $image.Width))
            
            Write-Host "Optimizing $filePath ($($image.Width)x$($image.Height) -> ${newWidth}x${newHeight})..."
            
            $newImage = new-object System.Drawing.Bitmap $newWidth, $newHeight
            $graphics = [System.Drawing.Graphics]::FromImage($newImage)
            
            # High quality settings
            $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
            $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
            $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

            $graphics.DrawImage($image, 0, 0, $newWidth, $newHeight)
            
            $image.Dispose() # Release original file handle
            
            # Set JPEG Quality to 95 (Very High)
            $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
            $encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
            $encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 95)

            # Save overwritten
            $newImage.Save($filePath, $codec, $encParams)
            
            $newImage.Dispose()
            $graphics.Dispose()
        } else {
            $image.Dispose()
            Write-Host "Skipping $filePath (Width $($image.Width) is already <= 1000)"
        }
    } catch {
        Write-Error "Failed to resize $filePath : $_"
    }
}

# Recursively find images
Get-ChildItem -Path $basePath -Recurse -Include *.jpg,*.jpeg,*.png | ForEach-Object {
    Resize-Image -filePath $_.FullName
}

Write-Host "High-Quality Optimization Complete!"
