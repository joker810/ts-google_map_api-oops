
export const dateStringToDate=(dateString: string):Date=>{
    //28/10/2018
const dateParts = dateString.split('/')
.map((value:string):number=> {
    return parseInt(value,10);
})//['28','10','2018']

  const [day,month,year]=dateParts;
return new Date(year!,month!-1,day)
}