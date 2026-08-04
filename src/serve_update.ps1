$original = Get-Location
Set-Location $PSScriptRoot\..
try {
  Remove-Item -Recurse -Force docs -ErrorAction SilentlyContinue
  python3 src/python/compress.py
  npx @11ty/eleventy --serve
} finally {
  Set-Location $original
}
