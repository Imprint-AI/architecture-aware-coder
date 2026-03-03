import os
import json
import yaml
import sys
import subprocess

def get_repo_structure(root_dir):
    """
    Simple directory tree walker.
    """
    structure = {}
    for root, dirs, files in os.walk(root_dir):
        dirs[:] = [d for d in dirs if d not in ['.git', 'node_modules', '__pycache__', 'dist', 'build', 'venv', '.next']]
        rel_path = os.path.relpath(root, root_dir)
        current = structure
        if rel_path != ".":
            for part in rel_path.split(os.sep):
                if part not in current: current[part] = {}
                current = current[part]
        for f in files:
            if f.endswith(('.py', '.js', '.ts', '.tsx', '.go', '.java', '.c', '.cpp', '.rs', '.php')):
                current[f] = "file"
    return structure

def extract_metadata(root_dir):
    """
    Extracts key components like Services, Controllers, Repositories based on naming conventions.
    """
    components = []
    for root, dirs, files in os.walk(root_dir):
        for f in files:
            name_lower = f.lower()
            if "service" in name_lower:
                components.append({"id": f, "name": f, "t": "service", "path": os.path.relpath(os.path.join(root, f), root_dir)})
            elif "controller" in name_lower or "api" in name_lower:
                components.append({"id": f, "name": f, "t": "api", "path": os.path.relpath(os.path.join(root, f), root_dir)})
            elif "repository" in name_lower or "model" in name_lower:
                components.append({"id": f, "name": f, "t": "data", "path": os.path.relpath(os.path.join(root, f), root_dir)})
    return components

def main():
    root_dir = sys.argv[1] if len(sys.argv) > 1 else "."
    
    # 1. Facts (YAML friendly)
    components = extract_metadata(root_dir)
    
    # 2. Structure
    structure = get_repo_structure(root_dir)
    
    analysis = {
        "project_root": os.path.abspath(root_dir),
        "facts": {
            "components": components,
            "relations": [] # Placeholder for future dependency analysis
        },
        "file_structure": structure
    }
    
    # Output as YAML for token efficiency and AI parsing
    print(yaml.dump(analysis, default_flow_style=False))

if __name__ == "__main__":
    main()
