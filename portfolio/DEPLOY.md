# Redeploy to mesdsky/portfolio

Repository branch: `master`
Vercel root directory: `portfolio`
Framework preset: `Other`
Build, install, and output commands: no overrides

## PowerShell update

```powershell
Set-Location "$HOME\portfolio-deploy-clean"
git checkout master
git pull origin master

Remove-Item ".\portfolio" -Recurse -Force
New-Item ".\portfolio" -ItemType Directory | Out-Null

$TempFolder = "$env:TEMP\portfolio-v3"
Remove-Item $TempFolder -Recurse -Force -ErrorAction SilentlyContinue
Expand-Archive "$HOME\Downloads\portfolio-nabil-v3.zip" $TempFolder -Force
Copy-Item "$TempFolder\*" ".\portfolio\" -Recurse -Force

git add -A -- portfolio
git commit -m "Redesign portfolio with new UI and experience section"
git push origin master
```

Vercel should redeploy automatically after the push.
