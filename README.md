# Application Information
(Este proyecto fue ejecutado con apk)
Repository (link) [App-Remesas_Android](https://bitbucket.org/proyectosy/challenge/branch/feature/bookinga)
Commit Date: 23/01/2024

# Mobile test automation

Mobile automation framework based on Cucumber - WebdriverIO - NodeJS - TypeScript - Axios - Allure Reports.

## CASOS

# @reservation
  Scenario Outline: As booking user, I select a destination and reserve a hotel

  <img width="1427" alt="image" src="https://github.com/margorittrojas/mobileBooking/assets/123605259/fbcf88cb-2150-4c72-aeb0-003bef19c958">

# @reservationNoDesti
  Scenario Outline: As booking user, I want a hotel but the destination is not selected

  <img width="1439" alt="image" src="https://github.com/margorittrojas/mobileBooking/assets/123605259/e51c3a61-6fbd-421d-96fc-e6f27883f4d1">

# @reservationNoExistDesti
  Scenario Outline: As booking user, I want a hotel but I select a destination that does not exist

  <img width="1439" alt="image" src="https://github.com/margorittrojas/mobileBooking/assets/123605259/573f846a-15d5-4b8f-906d-90b295eccf21">

# @reservationSort
  Scenario Outline: As booking user, I select a hotel but select the sort by button

 <img width="1433" alt="image" src="https://github.com/margorittrojas/mobileBooking/assets/123605259/ed22985d-605d-4e09-93da-8b7d0d80f0d0">


## OBSERVACION
Los casos presentados no contienen mas pasos debido a que la ventana "Fill in your info" en APPIUM presenta una "FLAG SECURE", lo cual impide inspeccionar los xpaths de la ventana.
Se deja evidencia 

<img width="1228" alt="image" src="https://github.com/margorittrojas/mobileBooking/assets/123605259/3eda786c-2c95-4dff-a66d-535567e968f6">



