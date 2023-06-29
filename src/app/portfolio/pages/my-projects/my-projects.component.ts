import { Component, OnInit } from '@angular/core';
import { ProjectDescriptions } from '../../components/project-description/project-description.component';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss'],
})
export class MyProjectsComponent implements OnInit {
  constructor() {}
  public infoProject: ProjectDescriptions[] = [
    {
      title: 'Spotify API',
      description:
        'Aplicación responsive que consume la API de Spotify para mostrar los artistas top y escuchar algunas canciones. RTambién utiliza un pequeño back en node js para actualizar el token de spofity automaticamente(ya que tiene caducidad de una hora)',
      imagen: 'hola',
      tecnologias: 'Angular, Nest Js, SASS',
      repositorio: 'https://github.com/JuanTasayco/FM4-SpotyAPIOnlyFrontend',
      link: 'www.paginaSpotify.com',
    },
    {
      title: 'Point Maps',
      description:
        'Aplicación responsive que consume la API de Mapbox para calcular distancias entre dos puntos ( generalmente tu ubicación con el lugar donde irás), encontrar lugares específicos, etc',
      imagen: 'hola',
      repositorio: 'https://github.com/JuanTasayco/PF4-MapsAngular',
      link: 'www.paginaSpotify.com',
    },
    {
      title: 'Lpm App V1',
      description:
        'Aplicación responsive con data propia que permite visualizar información de una guía de contabilidad para LPM, cuenta con características muy simples y fáciles de usar para el usuario, esta es la primera versión (solo front).',
      imagen: 'hola',
      repositorio:
        'https://github.com/JuanTasayco/06-WebConta-Angular/tree/main/src',
      link: 'www.paginaSpotify.com',
    },
    {
      title: 'WebEntertaiment',
      description:
        'Aplicación responsive full stack de películas, permite obtener un catálogo de películas, añadir tus películas a favoritas y explorar más opciones.',
      imagen: 'hola',
      repositorio:
        'https://github.com/JuanTasayco/PF3-WebAppEntertainment , https://github.com/JuanTasayco/BF3-WebAppEntertainment ',
      link: 'www.paginaSpotify.com',
    },
    {
      title: 'Lpm App V2',
      description:
        'Aplicación responsive full stack, esta es la segunda versión de la app de LPM, añade un panel de administradores al cual solo se accederá mediante la autenticación y autorización debida, puede modificar, agregar y eliminar guías, también puede eliminar,editar y eliminar usuarios, todo esto mencionado como caracteristica adicional a la visualización que solo tenía la versión 1.',
      imagen: 'hola',
      repositorio:
        'https://github.com/JuanTasayco/F1-LpmGuideFrontend , https://github.com/JuanTasayco/F1-LpmGuideBackend ',
      link: 'www.paginaSpotify.com',
    },
    {
      title: 'FilterMaps',
      description:
        'Aplicación responsive que permite encontrar un país o un serie de países en base a filtros ( por continente, por nombre, etc), también utilizo Mapbox para mostrar la ubicación exacta del país en el mapa',
      imagen: 'hola',
      repositorio: 'https://github.com/JuanTasayco/PF5-CountryAPI',
      link: 'www.paginaSpotify.com',
    },
  ];
  ngOnInit(): void {}
}
