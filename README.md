# Micro Frontend with Nx and Angular in ASP.NET Framework

## Overview

This project demonstrates how to create a micro frontend architecture using Nx and Angular, and embed it into an ASP.NET Framework application. Micro frontends allow for the development of independent frontend applications that can be integrated into a single user interface.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v12 or later)
- Angular CLI
- Nx CLI
- .NET Framework (version 4.7 or later)
- Visual Studio (for ASP.NET development)

## Project Structure

- **/frontend**: Contains the Nx workspace and Angular applications.
- **/aspnet-app**: The ASP.NET Framework application that serves as the host for the micro frontends.

## Getting Started

### Step 1: Set Up Nx and Angular

1. **Create an Nx workspace**:

   ```bash
   npx create-nx-workspace@latest frontend
