# The Hackett Group - Frontend Challenge

## Objective

This Angular application visualizes two charts using data from the [DataUSA API](https://datausa.io/). The charts display:
- **Multi-Axis Line Chart**: Population trends for Alabama, Florida, and California (2013-2021).
- **Pie Chart**: Distribution of US households by vehicle ownership in 2021.

## Approach & Implementation Details

### 1. **Project Structure**
- **Angular** is used as the main framework.
- **Chart.js** is integrated for chart rendering.

### 2. **Data Fetching**
- **Population Data**: Fetched from `https://datausa.io/api/data?drilldowns=State&measures=Population`.
- **Vehicle Ownership Data**: Fetched from `https://datausa.io/api/data?measure=Commute%20Means%20by%20Gender&geo=01000US&drilldowns=Vehicles%20Available`.

### 3. **Chart Components**
- **PopulationChartComponent**: Renders a multi-line chart for the population of the three states across years.
- **VehicleOwnershipChartComponent**: Renders a pie chart for vehicle ownership distribution.
- Both components are responsive and styled to match the template.

### 4. **UI/UX**
- **Responsiveness**: Layout and charts adapt to different screen sizes.

### 5. **Styling**
- Uses CSS variables and SCSS for maintainable and scalable styles.
- All colors, fonts, and spacings are matched to the template as closely as possible.

## Additional Notes

- **Extensibility**: The app is modular and can be extended with more charts or features.
- **Accessibility**: Basic accessibility practices are followed (alt texts, semantic HTML).
- **Assets**: All SVGs and images are placed in the `assets` folder as per the template.
- **Dependencies**: Ensure to run `npm install` to install all required packages.

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   ng serve
   ```
3. Open [http://localhost:4200](http://localhost:4200) in your browser.

