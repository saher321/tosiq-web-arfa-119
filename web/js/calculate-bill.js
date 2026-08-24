function calc_bill () {
    var c_units = Number(document.getElementById("consumed_units").value)
    var result  = document.getElementById("result")
    
    var normal_unit_charge      = 30
    var standard_unit_charge    = 35
    var resedential_unit_charge = 45
    var commercial_unit_charge  = 65

    var gov_tax                 = 2000
    var fat                     = 755
    var subsidy                 = 150
    var total_bill_amount = 0

    if (c_units == '' || !c_units || c_units <= 149){
        result.innerText = "Invalid units entry"
        return;
    }

    if (c_units >= 150 && c_units <= 210) {

        total_bill_amount = (c_units * normal_unit_charge) + gov_tax + fat
        total_bill_amount = total_bill_amount - subsidy

    } else if (c_units >= 211 && c_units <= 300) {
        
        total_bill_amount = (c_units * standard_unit_charge) + gov_tax + fat

    } else if (c_units >= 301 && c_units <= 350) {
        
        total_bill_amount = (c_units * resedential_unit_charge) + gov_tax + fat

    } else if (c_units >= 351) {
        
        total_bill_amount = (c_units * commercial_unit_charge) + gov_tax + fat

    }

    result.innerText = total_bill_amount


}