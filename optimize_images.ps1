
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
        
        # Check if resize is needed (e.g., width > 600)
        if ($image.Width -gt 600) {
            $newWidth = 600
            $newHeight = [int]($image.Height * (600 / $image.Width))
            
            Write-Host "Resizing $filePath from $($image.Width)x$($image.Height) to ${newWidth}x${newHeight}..."
            
            $newImage = new-object System.Drawing.Bitmap $newWidth, $newHeight
            $graphics = [System.Drawing.Graphics]::FromImage($newImage)
            $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $graphics.DrawImage($image, 0, 0, $newWidth, $newHeight)
            
            $image.Dispose() # Release original file handle
            
            # Save overwritten
            $newImage.Save($filePath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
            
            $newImage.Dispose()
            $graphics.Dispose()
        } else {
            $image.Dispose()
            Write-Host "Skipping $filePath (Already small enough)"
        }
    } catch {
        Write-Error "Failed to resize $filePath : $_"
    }
}

# Recursively find images
Get-ChildItem -Path $basePath -Recurse -Include *.jpg,*.jpeg,*.png | ForEach-Object {
    Resize-Image -filePath $_.FullName
}

Write-Host "Optimization Complete!"
