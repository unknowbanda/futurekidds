const stateCities = {
    andhra_pradesh: ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool"],
    arunachal_pradesh: ["Itanagar", "Tawang", "Ziro", "Pasighat", "Bomdila"],
    assam: ["Guwahati", "Dibrugarh", "Silchar", "Jorhat", "Tezpur"],
    bihar: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga"],
    chhattisgarh: ["Raipur", "Bilaspur", "Durg", "Bhilai", "Korba"],
    goa: ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda"],
    gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
    haryana: ["Chandigarh", "Gurgaon", "Faridabad", "Panipat", "Ambala"],
    himachal_pradesh: ["Shimla", "Manali", "Dharamshala", "Solan", "Mandi"],
    jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Deoghar"],
    karnataka: ["Bengaluru", "Mysore", "Mangalore", "Hubli", "Belgaum"],
    kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Alappuzha"],
    madhya_pradesh: ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain"],
    maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
    manipur: ["Imphal", "Bishnupur", "Thoubal", "Churachandpur", "Kakching"],
    meghalaya: ["Shillong", "Tura", "Jowai", "Nongpoh", "Williamnagar"],
    mizoram: ["Aizawl", "Lunglei", "Champhai", "Serchhip", "Kolasib"],
    nagaland: ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha"],
    odisha: ["Bhubaneswar", "Cuttack", "Rourkela", "Puri", "Sambalpur"],
    punjab: ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar", "Patiala"],
    rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Bikaner"],
    sikkim: ["Gangtok", "Namchi", "Gyalshing", "Mangan", "Rongpo"],
    tamil_nadu: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"],
    telangana: ["Hyderabad", "Warangal", "Nizamabad", "Khammam", "Karimnagar"],
    tripura: ["Agartala", "Udaipur", "Dharmanagar", "Kailashahar", "Ambassa"],
    uttar_pradesh: ["Lucknow", "Kanpur", "Varanasi", "Agra", "Meerut"],
    uttarakhand: ["Dehradun", "Haridwar", "Nainital", "Haldwani", "Roorkee"],
    west_bengal: ["Kolkata", "Siliguri", "Durgapur", "Asansol", "Howrah"]
};

function updateCities() {
    const stateSelect = document.getElementById("state");
    const citySelect = document.getElementById("city");
    const selectedState = stateSelect.value;

    // Clear current city options
    citySelect.innerHTML = '';

    // Populate new city options
    if (selectedState && stateCities[selectedState]) {
        stateCities[selectedState].forEach(city => {
            const option = document.createElement("option");
            option.value = city.toLowerCase().replace(/ /g, "_");
            option.textContent = city;
            citySelect.appendChild(option);
        });

        // Add "Others" option
        const othersOption = document.createElement("option");
        othersOption.value = "others";
        othersOption.textContent = "Others";
        citySelect.appendChild(othersOption);
    }
}
