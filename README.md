# Hosting Micro Frontend Angular Apps in Legacy ASP.NET Framework

## Overview

This project illustrates how to create a multi-project Angular application and embed it into an ASP.NET Framework application. This approach enables the development of independent front-end applications that seamlessly integrate into a unified legacy user interface.

Below are some effective design patterns and best practices to consider:

### Strangler Pattern

  **Description**: Gradually replace parts of the existing application by building new features as micro-frontends. This allows for a phased transition, where old components can be removed over time.
  
   **Implementation**: Use routing to direct users to either the old or new versions of a feature. In this demo, we are migrating a dashboard by creating a new micro-frontend while keeping the legacy version operational until the transition is complete.

### Fragmentation Pattern

   **Description**: Decompose the monolithic UI into smaller, independent pieces (micro-frontends) that can be developed, deployed, and scaled individually.
   
   **Implementation**: Identify logical boundaries within the application (e.g., user management, reporting) and develop each as a separate micro-frontend. In this demo, we've separated the application based on admin and non-admin users.

### Composition Pattern

   **Description**: Integrate multiple micro-frontends into a cohesive user interface.
   
   **Implementation**: Utilize a container or shell application to manage the layout and loading of different micro-frontends. In this demo, we leverage the layout page of ASP.NET MVC.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v12 or later)
- Angular CLI
- .NET Framework (version 4.7 or later)
- Visual Studio (for ASP.NET development)
- Visual Studio Code (for Angular development)

## Project Structure

- **/modern-ng-app**: Contains the Angular workspace with multiple applications (i.e., admin-app and user-app) and shared libraries (i.e., auth-lib, util-lib, and ui-element-lib).
- **/legacy-dotnet-app**: The ASP.NET Framework application serving as the host for the micro Angular frontends.

## Getting Started

### Step 1: Set Up Angular

1. **Install npm package inside modern-nx-app**:

   ```bash
   npm install

2. **Build all angular applications and shared libraries inside modern-nx-app**:

   ```bash
   npm run build:all

### Step 2: Run Angular and Asp.Net 4.7 applications

1. **Start the Angular applications (admin-app & user-app) in the modern-nx-app directory**:

   ```bash
   npm run start

2. **Run the ASP.NET application in the legacy-dotnet-app directory**:

   ```bash
   -> Click the Login button.
   -> Select the user type (either "Admin" or "User"), enter a valid email and password, and click the Login button.
      - Based on your selection, the corresponding Angular application will be displayed.
      - Use the sidebar links to view legacy ASP.NET pages or the Angular pages hosted within the ASP.NET layout (i.e., master) page.