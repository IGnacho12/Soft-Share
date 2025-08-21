---
title: "Activar la ejecución de Scripts"
description: "Solución al error -> 'No se puede cargar el archivo X porque la ejecución de scripts está deshabilitada en este sistema' <- :D"
---

Para poder ejecutar scripts en PowerShell, es necesario cambiar la política de ejecución para permitirlo.

---

## Pasos para activar la ejecución de scripts

1. Abre **PowerShell** como **administrador**.
2. Copia y pega el siguiente comando y presiona Enter:

```powershell
Set-ExecutionPolicy Unrestricted
```

Y listo, una vez se ejecute, ya puedes cerrar la ventana, y la ejecución de scripts estará activada.
