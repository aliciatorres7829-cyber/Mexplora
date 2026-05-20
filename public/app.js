async function cargarDestinos() {

    try {

        const response = await fetch('/api/destinos');
        const data = await response.json();

        const container = document.getElementById('destinosContainer');

        container.innerHTML = '';

        const imagenes = {

            "Aguascalientes":"images/estados/aguascalientes.jpg",
            "Baja California":"images/estados/bajacalifornia.jpg",
            "Baja California Sur":"images/estados/bajacaliforniasur.jpg",
            "Campeche":"images/estados/campeche.jpg",
            "Chiapas":"images/estados/chiapas.jpg",
            "Chihuahua":"images/estados/chihuahua.jpg",
            "Ciudad de México":"images/estados/cdmx.jpg",
            "Coahuila":"images/estados/coahuila.jpg",
            "Colima":"images/estados/colima.jpg",
            "Durango":"images/estados/durango.jpg",
            "Guanajuato":"images/estados/guanajuato.jpg",
            "Guerrero":"images/estados/guerrero.jpg",
            "Hidalgo":"images/estados/hidalgo.jpg",
            "Jalisco":"images/estados/jalisco.jpg",
            "Michoacán":"images/estados/michoacan.jpg",
            "Morelos":"images/estados/morelos.jpg",
            "Nayarit":"images/estados/nayarit.jpg",
            "Nuevo León":"images/estados/nuevoleon.jpg",
            "Oaxaca":"images/estados/oaxaca.jpg",
            "Puebla":"images/estados/puebla.jpg",
            "Querétaro":"images/estados/queretaro.jpg",
            "Quintana Roo":"images/estados/quintanaroo.jpg",
            "San Luis Potosí":"images/estados/sanluispotosi.jpg",
            "Sinaloa":"images/estados/sinaloa.jpg",
            "Sonora":"images/estados/sonora.jpg",
            "Tabasco":"images/estados/tabasco.jpg",
            "Tamaulipas":"images/estados/tamaulipas.jpg",
            "Tlaxcala":"images/estados/tlaxcala.jpg",
            "Veracruz":"images/estados/veracruz.jpg",
            "Yucatán":"images/estados/yucatan.jpg",
            "Zacatecas":"images/estados/zacatecas.jpg"

        };

        data.forEach(destino => {

            const imagen =
            `images/${
                destino.nombre_estado
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g,"")
                .replaceAll(' ','')
            }.jpg`;

            container.innerHTML += `

            <div class="col-md-4">

                <div class="destino-card">

                    <div class="image-container">

                        <img src="${imagen}"
                             alt="${destino.nombre_destino}">

                    </div>

                    <div class="destino-info">

                        <h4>${destino.nombre_destino}</h4>

                        <p class="visitantes">
                            ${Number(
                                destino.total_visitantes
                            ).toLocaleString()}
                        </p>

                        <span class="badge bg-primary">
                            ${destino.nombre_estado}
                        </span>

                    </div>

                </div>

            </div>

            `;

        });

    } catch(error) {

        console.error("Error cargando destinos:", error);

    }

}

cargarDestinos();