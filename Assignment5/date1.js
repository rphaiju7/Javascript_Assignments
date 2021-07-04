function dispDate(){
     d = new Date();
    day= d.getDate();
    month = d.getMonth()+1;
    year = d.getFullYear();
   alert("The date(dd-mm-yyyy) "+day+" "+month+" "+year);

}
