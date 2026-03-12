@echo off
SETLOCAL
:: Add Node.js to PATH just in case
SET PATH=C:\Program Files\nodejs;%PATH%

cd /d "%~dp0"
title Portfolio Production Build

echo =======================================================
echo   BUILDING AND STARTING PRODUCTION PREVIEW
echo =======================================================
echo.
echo   This script will compile the project (npm run build)
echo   and then serve it (npm start).
echo.
echo   This simulates exactly how the site will run on the web.
echo   (Note: Edits will NOT update automatically in this mode)
echo.
echo   TO STOP: Simply CLOSE this window.
echo.
echo =======================================================

echo Building...
call npm run build

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Build failed! Please check the errors above.
    pause
    exit /b %errorlevel%
)

echo.
echo Build successful! Starting server...
start "" "http://localhost:3000"
call npm start

pause
