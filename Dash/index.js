function updateMap(){
    fetch("./data.json")
    .then(response => response.json())
    .then(rsp => {
        console.log(rsp)
        rsp.data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude;
            //mark on the map
            new mapboxgl.Marker({
                draggable: false,
                color: "rgb(112, 222, 241)"
            })

                .setLngLat([longitude, latitude])
                .addTo(map);
                map.dragRotate.disable();
        });

    })
}

updateMap();