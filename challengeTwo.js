const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
    ];
    
    //Get companies that has category is Retail
    function filterCategory(companies){
            companies.filter((listed)=>{
               if(listed.category === 'Retail'){
                 console.log(listed)
               }
            })
    }
    //Get companies that were build in or after 1980 and ended in or before 2015
    function filterTenure(companies){
        companies.filter((yr)=>{
            if(yr.start >= '1980' && yr.end <= 2015){
                console.log(yr)
            }
        })
    }
    //Get companies that has lasted less than 10 years
    // function decadeFilter(companies){
    //     companies.filter((c)=>{
    //         if(c.end - c.start >= 10){
    //             console.log(c)
    //         }
    //     })
    // }
    const decadeFilter = companies.filter((company)=> (company.end = company.start >=10))

    //filterCategory(companies)
    //filterTenure(companies)
    console.log(decadeFilter);