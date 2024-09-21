
@echo off
echo "Running pre-build tasks..."
cd ..
set SOURCE_DIR="modern-mfe-nx-ng-ui\dist\apps\modern-mfe-nx-ng-ui\browser"
set DEST_DIR="legacy-dotnet-app\asp-dotnet-web\wwwroot"

del "%DEST_DIR%\*.*" /q

xcopy %SOURCE_DIR% %DEST_DIR% /s /i /y

echo Files copied from %SOURCE_DIR% to %DEST_DIR%

setlocal enabledelayedexpansion

REM Change to the specified directory
cd /d "%DEST_DIR%"
echo Current directory is: %cd%
for %%F in (*) do (
  
    set "FILENAME=%%F"
    if /i "!FILENAME:~0,4!"=="main" (
        echo file rename from %%F to main.js
        ren "%%F" "main.js"
    ) 
    if /i "!FILENAME:~0,9!"=="polyfills" (
        echo file rename from %%F to polyfills.js
        ren "%%F" "polyfills.js"
    ) 
    if /i "!FILENAME:~0,6!"=="styles" (
        echo file rename from %%F to styles.css
        ren "%%F" "styles.css"
    ) 
)