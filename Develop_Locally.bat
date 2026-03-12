@echo off
SETLOCAL
:: Add Node.js to PATH just in case it's not picked up immediately after install
SET PATH=C:\Program Files\nodejs;%PATH%

cd /d "%~dp0"
title Portfolio Dev Server

echo =======================================================
echo   STARTING LOCAL DEVELOPMENT SERVER
echo =======================================================
echo.
echo   1. The browser will open automatically at http://localhost:3000
echo   2. You can edit files in 'src/' and save to see changes immediately.
echo   3. TO STOP THE SERVER: Simply CLOSE this window.
echo.
echo =======================================================

:: Launch browser in background after a short delay to allow server to start
start "" "http://localhost:3000"

:: Start the dev server
call npm run dev

pause
