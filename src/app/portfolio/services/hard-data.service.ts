import { Injectable } from '@angular/core';
import { ProjectDescriptions } from '../interfaces/project-descriptions.interface';

@Injectable({
  providedIn: 'root',
})
export class HardDataService {
  private infoProjects: ProjectDescriptions[] = [
    {
      title: 'Lpm App V1',
      description:
        'Aplicación responsive con data propia que permite visualizar información de una guía de contabilidad para LPM, cuenta con características muy simples y fáciles de usar para el usuario, esta es la primera versión (solo front).',
      imagenes: [
        {
          itemImageSrc: 'assets/imagenes/lpmOne1.png',
          alt: 'lpmv1Img1',
        },
        {
          itemImageSrc: 'assets/imagenes/lpmOne2.png',
          alt: 'lpmv1Img2',
        },
        {
          itemImageSrc: 'assets/imagenes/lpmOne3.png',
          alt: 'lpmv1Img3',
        },
        {
          itemImageSrc: 'assets/imagenes/lpmOne4.png',
          alt: 'lpmv1Img4',
        },
      ],
      repositorio:
        'https://github.com/JuanTasayco/06-WebConta-Angular/tree/main/src',
      link: 'https://lpmapp.vercel.app/',
      tecnologias: 'Angular 14, Bootstrap, NGPrime ',
    },

    {
      title: 'Lpm App V2',
      description:
        'Aplicación responsive full stack, esta es la segunda versión de la app de LPM, añade un panel de administradores al cual solo se accederá mediante la autenticación y autorización debida, puede modificar, agregar y eliminar guías, también puede eliminar,editar y eliminar usuarios, todo esto mencionado como caracteristica adicional a la visualización que solo tenía la versión 1.',
      imagenes: [
        {
          itemImageSrc: 'assets/imagenes/lpmTwo2.png',
          alt: 'lpmv1Img2',
        },
        {
          itemImageSrc: 'assets/imagenes/lpmTwo3.png',
          alt: 'lpmv1Img3',
        },
        {
          itemImageSrc: 'assets/imagenes/lpmTwo4.png',
          alt: 'lpmv1Img4',
        },
        {
          itemImageSrc: 'assets/imagenes/lpmTwo5.png',
          alt: 'lpmv1Img4',
        },
        {
          itemImageSrc: 'assets/imagenes/lpmTwo6.png',
          alt: 'lpmv1Img1',
        },
        {
          itemImageSrc: 'assets/imagenes/lpmTwo7.png',
          alt: 'lpmv1Img2',
        },
        {
          itemImageSrc: 'assets/imagenes/lpmTwo8.png',
          alt: 'lpmv1Img3',
        },
        {
          itemImageSrc: 'assets/imagenes/lpmTwo9.png',
          alt: 'lpmv1Img4',
        },
        {
          itemImageSrc: 'assets/imagenes/lpmTwo10.png',
          alt: 'lpmv1Img3',
        },
        {
          itemImageSrc: 'assets/imagenes/lpmTwo1.png',
          alt: 'lpmv1Img4',
        },
      ],
      repositorio: 'https://github.com/JuanTasayco/F1-LpmGuideFrontend ',
      link: 'www.paginaSpotify.com',
      tecnologias: 'Angular 14, Bootstrap, NGPrime ',
    } /* , https://github.com/JuanTasayco/F1-LpmGuideBackend  */,
    {
      title: 'Spotify API',
      description:
        'Aplicación responsive que consume la API de Spotify para mostrar los artistas top y escuchar algunas canciones. RTambién utiliza un pequeño back en node js para actualizar el token de spofity automaticamente(ya que tiene caducidad de una hora)',
      imagenes: [
        {
          itemImageSrc: 'assets/imagenes/spotifyapp1.png',
          alt: 'spotImage',
        },
        {
          itemImageSrc: 'assets/imagenes/spotifyapp2.png',
          alt: 'spotImage2',
        },
        {
          itemImageSrc: 'assets/imagenes/spotifyapp3.png',
          alt: 'spotImage3',
        },
        {
          itemImageSrc: 'assets/imagenes/spotifyapp4.png',
          alt: 'spotImage4',
        },
      ],
      tecnologias: 'Angular, Nest Js, SASS, Typescript, Bootstrap',
      repositorio: 'https://github.com/JuanTasayco/FM4-SpotyAPIOnlyFrontend',
      link: 'www.paginaSpotify.com',
    },
    {
      title: 'Point Maps',
      description:
        'Aplicación responsive que consume la API de Mapbox para calcular distancias entre dos puntos ( generalmente tu ubicación con el lugar donde irás), encontrar lugares específicos, etc',
      imagenes: [
        {
          itemImageSrc: 'assets/imagenes/mapbox1.png',
          alt: 'mapImg',
        },
        {
          itemImageSrc: 'assets/imagenes/mapbox2.png',
          alt: 'mapImg2',
        },
        {
          itemImageSrc: 'assets/imagenes/mapbox3.png',
          alt: 'mapImg3',
        },
        {
          itemImageSrc: 'assets/imagenes/mapbox4.png',
          alt: 'mapImg4',
        },
      ],
      tecnologias: 'Angular 14, Bootstrap, NGPrime ',
      repositorio: 'https://github.com/JuanTasayco/PF4-MapsAngular',
      link: 'https://pf-4-maps-angular-juantasayco.vercel.app',
    },

    {
      title: 'WebEntertaiment',
      description:
        'Aplicación responsive full stack de películas, permite obtener un catálogo de películas, añadir tus películas a favoritas y explorar más opciones.',
      imagenes: [
        {
          itemImageSrc: 'assets/imagenes/webapp1.png',
          alt: 'lpmv1Img2',
        },
        {
          itemImageSrc: 'assets/imagenes/webapp2.png',
          alt: 'lpmv1Img3',
        },
        {
          itemImageSrc: 'assets/imagenes/webapp3.png',
          alt: 'lpmv1Img4',
        },
        {
          itemImageSrc: 'assets/imagenes/webapp4.png',
          alt: 'lpmv1Img4',
        },
      ],
      tecnologias: 'Angular 14, Bootstrap, NGPrime ',
      repositorio: 'https://github.com/JuanTasayco/FM3-WebAppIOnyFrontend',
      link: 'www.youtube.com',
    },

    {
      title: 'FilterMaps',
      description:
        'Aplicación responsive que permite encontrar un país o un serie de países en base a filtros ( por continente, por nombre, etc), también utilizo Mapbox para mostrar la ubicación exacta del país en el mapa',
      imagenes: [
        {
          itemImageSrc: 'assets/imagenes/restCountry1.png',
          alt: 'restCountryimg',
        },
        {
          itemImageSrc: 'assets/imagenes/restCountry2.png',
          alt: 'restCountryimg',
        },
        {
          itemImageSrc: 'assets/imagenes/restCountry3.png',
          alt: 'restCountryimg',
        },
      ],
      tecnologias: 'Angular 14, Bootstrap, NGPrime ',
      repositorio: 'https://github.com/JuanTasayco/PF5-CountryAPI',
      link: 'https://country-app-angular.vercel.app/paises/fronteras',
    },
    {
      title: 'Lpm App V1',
      description:
        'Aplicación responsive con data propia que permite visualizar información de una guía de contabilidad para LPM, cuenta con características muy simples y fáciles de usar para el usuario, esta es la primera versión (solo front).',
      imagenes: [
        {
          itemImageSrc: 'assets/imagenes/lpmOne1.png',
          alt: 'lpmv1Img1',
        },
        {
          itemImageSrc: 'assets/imagenes/lpmOne2.png',
          alt: 'lpmv1Img2',
        },
        {
          itemImageSrc: 'assets/imagenes/lpmOne3.png',
          alt: 'lpmv1Img3',
        },
        {
          itemImageSrc: 'assets/imagenes/lpmOne4.png',
          alt: 'lpmv1Img4',
        },
      ],
      repositorio:
        'https://github.com/JuanTasayco/06-WebConta-Angular/tree/main/src',
      link: 'https://lpmapp.vercel.app/',
      tecnologias: 'Angular 14, Bootstrap, NGPrime ',
    },
    {
      title: 'MoonApp',
      description:
        'Aplicación responsive sobre el espacio, que describe las tecnologías, los involucrados y algunos planetas descubiertos a la actualidad, uso de otro framework css y alto uso de observables con una API local. ',
      imagenes: [
        {
          itemImageSrc: 'assets/imagenes/moon2.png',
          alt: 'moonImg2',
        },
        {
          itemImageSrc: 'assets/imagenes/moon3.png',
          alt: 'moonImg3',
        },
        {
          itemImageSrc: 'assets/imagenes/moon4.png',
          alt: 'moonImg4',
        },
      ],
      repositorio: 'https://github.com/JuanTasayco/PF6-MoonProjectFront',
      link: 'https://moon-project2.vercel.app/moon/principal',
      tecnologias: 'Angular 14, Tailwind, Typescript,  ',
    },
  ];

  get hardDataProjects() {
    return [...this.infoProjects];
  }

  constructor() {}
}
