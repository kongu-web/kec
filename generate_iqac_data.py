import os
import json

base_dir = r"d:\kongu\kec\public\files\iqac"
output_file = r"d:\kongu\kec\src\components\IQAC\iqacData.js"

data = {
    "circulars": {"recent": [], "archived": []},
    "iso": [],
    "meetings": [],
    "audit": {"reports": [], "actionTaken": [], "files": []},
    "strategic": [],
    "bestPractices": [],
    "annualReport": [],
    "affiliation": {
        "autonomous": [],
        "au": [],
        "aicte": {"eng": [], "mca": []}
    },
    "composition": []
}

def get_files_with_paths(directory):
    file_list = []
    if not os.path.exists(directory):
        return []
    for f in os.listdir(directory):
        if os.path.isfile(os.path.join(directory, f)) and f.lower().endswith('.pdf'):
            # Path relative to public folder
            # d:\kongu\kec\public\files\iqac\... -> /files/iqac/...
            full_path = os.path.join(directory, f)
            rel_path = "/files/iqac" + full_path.split("files\\iqac")[-1].replace("\\", "/")
            file_list.append({"name": f, "path": rel_path})
    # Sort files by name reverse usually for years
    file_list.sort(key=lambda x: x['name'], reverse=True)
    return file_list

# Map folders
data['iso'] = get_files_with_paths(os.path.join(base_dir, "ISO"))
data['meetings'] = get_files_with_paths(os.path.join(base_dir, "Meeting & Minutes"))
data['strategic'] = get_files_with_paths(os.path.join(base_dir, "Strategic Plan"))
data['bestPractices'] = get_files_with_paths(os.path.join(base_dir, "Best Practices"))
data['annualReport'] = get_files_with_paths(os.path.join(base_dir, "Annual Reports"))
data['composition'] = get_files_with_paths(os.path.join(base_dir, "Formation of IQAC"))

# Audit has subfolders
audit_dir = os.path.join(base_dir, "Audit details")
data['audit']['reports'] = get_files_with_paths(os.path.join(audit_dir, "reports"))
data['audit']['actionTaken'] = get_files_with_paths(os.path.join(audit_dir, "action taken reports"))
data['audit']['files'] = get_files_with_paths(audit_dir)

# Affiliation
aff_dir = os.path.join(base_dir, "Affliation & Approval")
data['affiliation']['autonomous'] = get_files_with_paths(os.path.join(aff_dir, "AUTONOMOUS"))
data['affiliation']['au'] = get_files_with_paths(os.path.join(aff_dir, "AU Affiliation"))
data['affiliation']['aicte']['eng'] = get_files_with_paths(os.path.join(aff_dir, "AICTE", "ENG"))
data['affiliation']['aicte']['mca'] = get_files_with_paths(os.path.join(aff_dir, "AICTE", "MCA"))

# Circulars (Hardcoded logic or scan Assets)
# Circulars were copied to assets/iqac/circulars
circular_dir = r"d:\kongu\kec\public\assets\iqac\circulars"
if os.path.exists(circular_dir):
    data['circulars']['recent'] = []
    for f in os.listdir(circular_dir):
         if f.lower().endswith('.pdf'):
             full_path = os.path.join(circular_dir, f)
             rel_path = "/assets/iqac/circulars/" + f
             data['circulars']['recent'].append({"name": f, "path": rel_path, "date": "2026-01-21"}) # Dummy date
    
    archive_dir = os.path.join(circular_dir, "archive")
    if os.path.exists(archive_dir):
        for f in os.listdir(archive_dir):
             if f.lower().endswith('.pdf'):
                 full_path = os.path.join(archive_dir, f)
                 rel_path = "/assets/iqac/circulars/archive/" + f
                 data['circulars']['archived'].append({"name": f, "path": rel_path, "date": "2024-01-01"})

# Generate JS content
js_content = "export const iqacData = " + json.dumps(data, indent=4) + ";"

with open(output_file, "w") as f:
    f.write(js_content)

print("iqacData.js generated successfully")
