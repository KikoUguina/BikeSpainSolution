# Bike Spain Solution

## Description

This application shows the bike-sharing networks of Spain using the **CityBike** API. You can view available bike stations in different cities, along with their availability status and other useful details.

## Application Structure

- **BikeNetworkList**: Displays all the available bike networks in Spain. By clicking on a network, the available stations for that network are shown.
- **StationList**: Displays the bike stations for the selected network, along with their availability, location, and other details.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/KikoUguina/BikeSpainSolution.git
    ```

2. Enter the project directory:

    ```bash
    cd BikeSpainSolution
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the project:

    ```bash
    npm run dev
    ```

5. Open your browser at `http://localhost:5173` to view the application in action.

## Explanation of Fields

### **Bike Availability**

When displaying the bike stations, there is an indicator for **bike availability**. This indicator can have the following values:

- **Low**: Means the station has low bike availability. This can happen when most of the bikes are taken and there are not many free bikes at that station.
  
- **Medium**: Indicates that the station has a moderate amount of bikes available. Some bikes are free, but it is not the station with the most available bikes.

- **High**: Means the station has a good number of bikes available. Most bikes are free, and users can easily take a bike.

#### Example of availability:

| Station           | Bikes Available | Empty Slots | Availability |
|-------------------|-----------------|-------------|--------------|
| Station A         | 8               | 2           | High         |
| Station B         | 4               | 6           | Medium       |
| Station C         | 1               | 10          | Low          |

**Availability Calculation**:  
The availability of bikes is calculated based on the percentage of free bikes over the total available bikes (free bikes + empty slots).

**Formula**:
Availability Percentage = (free bikes / (free bikes + empty slots)) * 100

### **Last Update**

Each station shows the **"Last Update"** field, which indicates when the information for that station was last updated. The date is displayed in the format **"2025.04.24 - 18:47:03"**.

This field helps you know if the data is recent or if there might be a delay in updating the information.

---

## API Used

- **CityBike API**:  
  This public API provides data about bike-sharing networks, stations, and vehicles in several cities.

- **Key API Endpoints**:
  - **Get bike networks**:  
    `GET https://api.citybik.es/v2/networks`
    
  - **Get stations by network**:  
    `GET https://api.citybik.es/v2/networks/{networkId}`

---

## Relevant Files

- **`src/api/getBikeNetwork.ts`**: Functions to get the bike networks from the CityBike API.
- **`src/api/getStationsByNetwork.ts`**: Functions to get the stations of a specific bike network.
- **`src/features/BikeNetworkList.tsx`**: Component that lists the available bike networks.
- **`src/features/StationList.tsx`**: Component that lists the bike stations for the selected network.

## Important Points to Note

- When showing reservations or the reservation system, it cannot be displayed as I have not seen any available reservations through the API for the networks I tested, or at least in Spain.
- There was a temporary block from the API when making too many requests, which was eventually reset over time. I was not required to provide an access token.
