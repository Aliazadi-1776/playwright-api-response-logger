```
  ░██╗░░░░░░░██╗██████╗░███████╗███╗░░██╗░█████╗░██╗░░██╗
  ░██║░░██╗░░██║██╔══██╗██╔════╝████╗░██║██╔══██╗██║░░██║
  ░╚██╗████╗██╔╝██████╔╝█████╗░░██╔██╗██║██║░░╚═╝███████║
  ░░████╔═████║░██╔══██╗██╔══╝░░██║╚████║██║░░██╗██╔══██║
  ░░╚██╔╝░╚██╔╝░██║░░██║███████╗██║░╚███║╚█████╔╝██║░░██║
  ░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚══════╝╚═╝░░╚══╝░╚════╝░╚═╝░░╚═╝
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░█████╗░██████╗░██╗░░░░░░░██████╗░█████╗░██████╗░░█████╗░██████╗░███████╗██████╗░
  ██╔══██╗██╔══██╗██║░░░░░░██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔══██╗
  ███████║██████╔╝██║█████╗╚█████╗░██║░░╚═╝██████╔╝███████║██████╔╝█████╗░░██████╔╝
  ██╔══██║██╔═══╝░██║╚════╝░╚═══██╗██║░░██╗██╔══██╗██╔══██║██╔═══╝░██╔══╝░░██╔══██╗
  ██║░░██║██║░░░░░██║░░░░░░██████╔╝╚█████╔╝██║░░██║██║░░██║██║░░░░░███████╗██║░░██║
  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░░░░░╚═════╝░░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░░░░╚══════╝╚═╝░░╚═╝
```

# 🎭 Playwright API Logger

A simple tool to capture and save API responses using [Playwright](https://playwright.dev).  
It supports both **interactive mode** (Q&A in terminal) and **CLI options** for advanced users.  

---

## ✨ Features
- Run as a terminal app: `api-logger`
- Two modes:
  - **Interactive** (for beginners)
  - **CLI Options** (for advanced users)
- Save responses in the `out/` folder as JSON or Binary
- Regex filtering for API requests
- Option to run in headless (hidden browser) or visible mode

---

## 🚀 Installation

### 1. Clone the project
```bash
git clone https://github.com/Aliazadi-1776/playwright-api-response-logger.git
cd playwright-api-response-logger
```

### 2. Install dependencies
```bash
npm install
```

### 3. Link globally as a command
```bash
npm link
```

> ⚠️ If you face permission issues:  
> ```bash
> sudo npm link
> ```
### 🔧 Make the CLI Executable
Before linking, ensure the CLI script is executable:
```bash
chmod +x bin/api-logger
```
---

## 🖥️ Usage

### Beginner mode (Interactive)
```bash
api-logger
```
The program will ask you these questions:
1. **Target site URL** → e.g., `digikala.com`
2. **API filter regex** → e.g., `api` or `graphql`
3. **Headless mode** → Yes/No
4. **Timeout** → Execution time in ms (0 = infinite)

---

### Advanced mode (CLI Options)
```bash
api-logger --url https://digikala.com --filter api --headless --timeout 30000
```

#### CLI Options
| Option       | Description |
|--------------|-------------|
| `--url`      | Target site URL (example: `https://digikala.com`) |
| `--filter`   | Regex to filter API requests (default: `api`) |
| `--headless` | Run browser in headless mode |
| `--timeout`  | Execution time in milliseconds (example: `30000` = 30s) |

---

## 📂 Project Structure
```
playwright-api-logger/
├── bin/
│   └── api-logger       # Terminal executable
├── lib/
│   ├── banner.js        # Banner printing
│   ├── cli.js           # CLI & input management
│   └── logger.js        # Main logging logic
├── package.json
├── README.md
└── .gitignore
```
---

## 🛠️ Roadmap
- [x] CLI interactive mode
- [x] CLI options (url, filter, headless, timeout)
- [ ] Export to CSV
- [ ] Config file support
- [ ] Docker support


---

## 📜 License
[MIT](LICENSE)

---

## 🤝 Contributing
Contributions, issues and feature requests are welcome!  
Feel free to open an issue or submit a pull request.

