$original = Get-Location
Set-Location $PSScriptRoot\..
try {
  Remove-Item -Recurse -Force docs -ErrorAction SilentlyContinue
  python3 src/python/compress.py
  npx @11ty/eleventy --serve --incremental
  New-Item -ItemType File -Path "docs\.nojekyll" -Force | Out-Null
} finally {
  Set-Location $original
}
