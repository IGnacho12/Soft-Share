# Instalar Codec Opus para los Audios de WhatsApp

  <lite-youtube videoid="NOOa8IRfTA4"></lite-youtube>

Les proporcionare 2 formas de  **Instalar el Codec Opus**
# Formas para solucionar el problemas
- Utilizar un **[Script](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbklDU1hCaUF2Vlp6SXIycW1qR293R1l0VVdYd3xBQ3Jtc0ttZnlTZ3NYOF9PdW9XcWE3WUtpYVRzWjg3NGlBcmdSZ3FVNFU3Y2dCcHN3bU5mNUxMVm1KNC1FdW04QWVDLV9oNTZDekRWN2pIR0lpYXNvbDVZVDlEdXpfa3hQWTFMbEphZ0I2X3hJQk5rRFBZUXRLRQ&q=https%3A%2F%2Fwww.mediafire.com%2Ffile%2Fwdj7ux9vbmxvzcw%2Finstalar_codec_opus.ps1%2Ffile&v=NOOa8IRfTA4)** para acelerar el proceso.
- Realizarlo de forma manual.
---
## Script
  > ⚠️ **IMPORTANTE**  
  > El script debe ser ejecutado con powershell.
  > Debes darle "click derecho" > "ejecutar con powershell" 

  🔗 **[Link para descargar](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbklDU1hCaUF2Vlp6SXIycW1qR293R1l0VVdYd3xBQ3Jtc0ttZnlTZ3NYOF9PdW9XcWE3WUtpYVRzWjg3NGlBcmdSZ3FVNFU3Y2dCcHN3bU5mNUxMVm1KNC1FdW04QWVDLV9oNTZDekRWN2pIR0lpYXNvbDVZVDlEdXpfa3hQWTFMbEphZ0I2X3hJQk5rRFBZUXRLRQ&q=https%3A%2F%2Fwww.mediafire.com%2Ffile%2Fwdj7ux9vbmxvzcw%2Finstalar_codec_opus.ps1%2Ffile&v=NOOa8IRfTA4)**

---


## Forma manual
1. Abrir `powershell` como `administrador`.
2. Ejecutar el siguente comando
```powershell
cd "$env:USERPROFILE\Desktop"
```
_Esto nos envía al escritorio, ya que mas adelante guardaremos un archivo en el escritorio para facilitar la operación._
3. Ejecutar el siguiente comando
```powershell
Get-AppPackage > buscar.txt
```
4. En nuestro escritorio aparecera un archivo de texto "buscar". Lo abrimos y presionamos Presiona [`Ctrl`] + [`F`]
5. Escribe "webmedia" y dale al botón de buscar.
6. En el bloque de la coincidencia copia el valor de **PackageFullName**
7. Y ejecuta el siguiente comando.
> ⚠️ **IMPORTANTE**  
> Debes reemplazar la parte del comando "PackageFullName" por el valor que copiaste antes 
```powershell
Remove-AppxPackage -Package PackageFullName
```
8. Dirigente a este **[Link (Microsoft Store Codec)](https://apps.microsoft.com/detail/9N5TDP8VCMHS?hl=es-mx&gl=US&ocid=pdpshare)** para reinstalar el Codec Opus.

Una vez lo instales. Ya podrás cerrar todo y usar **WhatsApp** normalemnte.

