# Directory Mapper & Renamer

This script recursively traverses a directory, replicates its structure, and creates empty files with `.test` added before their extension.

## Features
- Recursively copies directory structure
- Renames files by adding `.test` before their extension
- Creates empty files instead of copying contents
- Prevents duplicate `.test` suffixes

## Usage

### Prerequisites
- [Bun](https://bun.sh/) installed
- Node.js (optional, if running with `node` instead of `bun`)

### Installation
Clone the repository:
```sh
git clone https://github.com/yourusername/directory-mapper.git
cd directory-mapper
```

### Running the Script
Modify `sourceDir` and `targetDir` in `main.ts`, then execute:
```sh
bun run main.ts
```
Or, if using Node.js:
```sh
node main.ts
```

### Example
#### **Before (Source Directory)**
```
src/
├── file1.js
├── file2.ts
└── subdir/
    └── file3.py
```
#### **After (Target Directory)**
```
dest/
├── file1.test.js
├── file2.test.ts
└── subdir/
    └── file3.test.py
```

## Warning 
there are no protections in place so i suggest working with it in a vm to explore hoiw you could mess up, protections will be added in the future



## License
This project is licensed under the MIT License.

## Contributions
Pull requests are welcome! Feel free to submit issues or improvements.

