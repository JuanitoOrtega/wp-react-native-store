# Crear proyecto React Native
npx react-native init storeapp

# Entramos en la carpeta del proyecto
cd storeapp

# Instalamos una librería para convertir las credenciales en base-64
npm install -S base-64

# Lanzamos nuestra App
npx react-native run-android

# Instalar librería
npm install --save react-native-safe-area-context

# Instalamos librerías para navegación
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npx pod-install ios
npm install @react-navigation/native-stack