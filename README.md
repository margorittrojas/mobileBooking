# Application Information
Este proyecto fue ejecutado con apk "booking-com-32-9.apk"

# Mobile test automation

Mobile automation framework based on Cucumber - WebdriverIO - NodeJS - TypeScript - Allure Reports.

## PLANIFICACION
- Para la creación del proyecto se uso Visual Studio Code, Appium Server GUI y Appium Inspector
- El proyecto se divide en Feature, StepDefinitions y Pages
- Los casos han sido trabajados con examples para que la data no sea fija si no variable
- El codigo esta compuesto por condicionales (Switch case)
- Se utiliza el metodo scroll para la eleccion de fechas (checkin y checkout)
- Se utilizo un emulador de android "Pixel 4 Api 31" con android 12.0
- Los casos se ejecutan con el tag oficial "@hotelReservation"

## CASOS
# @reservation
  Scenario Outline: As booking user, I select a destination and reserve a hotel

  <img width="1427" alt="image" src="https://github.com/margorittrojas/mobileBooking/assets/123605259/fbcf88cb-2150-4c72-aeb0-003bef19c958">

# @reservationNoDesti
  Scenario Outline: As booking user, I want a hotel but the destination is not selected

 <img width="1426" alt="image" src="https://github.com/margorittrojas/mobileBooking/assets/123605259/ee039a0c-fdd0-49eb-9792-6919b04a2606">

# @reservationNoExistDesti
  Scenario Outline: As booking user, I want a hotel but I select a destination that does not exist

 <img width="1439" alt="image" src="https://github.com/margorittrojas/mobileBooking/assets/123605259/b119c6eb-05bb-4b12-a4ba-eb12fe5fcc45">

# @reservationSort
  Scenario Outline: As booking user, I select a hotel but select the sort by button

<img width="1433" alt="image" src="https://github.com/margorittrojas/mobileBooking/assets/123605259/750d6b6c-cf1d-4deb-a6a3-a85a7b64bc21">


## OBSERVACION
Los casos presentados no contienen mas pasos debido a que la ventana "Fill in your info" en APPIUM presenta una "FLAG SECURE", lo cual impide inspeccionar los xpaths de la ventana.
Se deja evidencia 

<img width="1228" alt="image" src="https://github.com/margorittrojas/mobileBooking/assets/123605259/3eda786c-2c95-4dff-a66d-535567e968f6">



