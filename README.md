# Bike Spain Solution

## Descripción

Esta aplicación muestra las redes de bicicletas de España utilizando la API de **CityBike**. Puedes ver las estaciones de bicicletas disponibles en diferentes ciudades, junto con su estado de disponibilidad y otros detalles útiles.

## Estructura de la aplicación

- **BikeNetworkList**: Muestra todas las redes de bicicletas disponibles en España. Al hacer clic en una red, se muestran las estaciones disponibles para esa red.
- **StationList**: Muestra las estaciones de bicicletas de la red seleccionada, junto con su disponibilidad, ubicación y otros detalles.

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/KikoUguina/BikeSpainSolution.git
    ```

2. Entra en el directorio del proyecto:

    ```bash
    cd BikeSpainSolution
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Ejecuta el proyecto:

    ```bash
    npm run dev
    ```

5. Abre tu navegador en `http://localhost:5173` para ver la aplicación en acción.

## Explicación de los campos

### **Disponibilidad de bicicletas**

Cuando se muestran las estaciones de bicicletas, se incluye un indicador de **disponibilidad de bicicletas**. Este indicador puede tener los siguientes valores:

- **Bajo**: Significa que la estación tiene una baja disponibilidad de bicicletas. Esto puede ocurrir cuando la mayoría de las bicicletas están ocupadas y no hay muchas bicicletas libres en esa estación.
  
- **Medio**: Indica que la estación tiene una cantidad moderada de bicicletas disponibles. Algunas bicicletas están libres, pero no es la estación con más opciones disponibles.

- **Alto**: Significa que la estación tiene una buena cantidad de bicicletas disponibles. La mayoría de las bicicletas están libres y los usuarios pueden tomar bicicletas sin dificultad.

#### Ejemplo de disponibilidad:

| Estación          | Bicicletas disponibles | Puestos vacíos | Disponibilidad |
|-------------------|------------------------|----------------|----------------|
| Estación A        | 8                      | 2              | Alto           |
| Estación B        | 4                      | 6              | Medio          |
| Estación C        | 1                      | 10             | Bajo           |

**Cálculo de Disponibilidad**:  
La disponibilidad de bicicletas se calcula en función del porcentaje de bicicletas libres sobre el total de bicicletas disponibles (bicicletas libres + puestos vacíos).

**Fórmula**:
Porcentaje de disponibilidad = (bicicletas libres / (bicicletas libres + puestos vacíos)) * 100


### **Última actualización**

Cada estación muestra el campo **"Última actualización"**, que indica cuándo se actualizó por última vez la información de esa estación. La fecha se muestra en formato **"2025.04.24 - 18:47:03"**.

Este campo te ayudará a saber si los datos son recientes o si puede haber un retraso en la actualización de la información.

---

## API utilizada

- **API de CityBike**:  
  Esta API pública proporciona datos sobre las redes de bicicletas, estaciones y vehículos de bicicletas en varias ciudades.

- **Puntos clave de la API**:
  - **Obtener redes de bicicletas**:  
    `GET https://api.citybik.es/v2/networks`
    
  - **Obtener estaciones por red**:  
    `GET https://api.citybik.es/v2/networks/{networkId}`

---

## Archivos relevantes

- **`src/api/getBikeNetwork.ts`**: Funciones para obtener las redes de bicicletas de la API de CityBike.
- **`src/api/getStationsByNetwork.ts`**: Funciones para obtener las estaciones de una red específica de bicicletas.
- **`src/features/BikeNetworkList.tsx`**: Componente que lista las redes de bicicletas disponibles.
- **`src/features/StationList.tsx`**: Componente que lista las estaciones de bicicletas de la red seleccionada.