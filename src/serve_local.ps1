$original = Get-Location
Set-Location $PSScriptRoot\..
try {
  npx serve docs
} finally {
  Set-Location $original
}
