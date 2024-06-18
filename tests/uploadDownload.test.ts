import {test} from '@playwright/test'


// test('Download files', async({page}) =>{
//     test.setTimeout(60000);
//     await page.goto('https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo')
//     await page.type("#textbox", "Test generate file to download")
//     await page.click("id=create")
   
//     const dowload = await Promise.all([
//         page.waitForEvent("download"),
//         page.click("id=link-to-download")
//     ])

//     const fileName = dowload[0].suggestedFilename()
//     await dowload[0].saveAs(fileName)
//     // const path = await dowload[0].path()
//     console.log(fileName)
// })

test('Upload files', async({page}) =>{
    test.setTimeout(60000);
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/')
    // await page.setInputFiles("//input[@type='file']",
    // ["uploadItems/Lambdainfo.txt","uploadItems/SC_Guide.pptx"])

    const [uploadFiles] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.click("//input[@type='file']")
    ])
    const isMultiple = uploadFiles.isMultiple();
    console.log("Is multiple: " + isMultiple)
    uploadFiles.setFiles(["uploadItems/Lambdainfo.txt",
                            "uploadItems/SC_Guide.pptx"])


})