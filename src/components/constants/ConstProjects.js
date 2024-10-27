// imagenes de projectos
import SWI from '../../icons/projectsImage/subwarrior.png'
import CPI from '../../icons/projectsImage/cutpast.png'
import MBM3 from '../../icons/projectsImage/match3.png'
import DMRK from '../../icons/projectsImage/dmarc.png'
import RTL from '../../icons/projectsImage/login.png'
import IFRM from '../../icons/projectsImage/Form-1.jpg'
import NTS from '../../icons/projectsImage/notas.jpg'

// iconos de lenguajes 
import lphp from '../../icons/php.png'
import ljava from '../../icons/java.png'
import ljs from '../../icons/js.png'
import lvb from '../../icons/vb.png'
import lcsharp from '../../icons/csharp.png'
import lsql from '../../icons/sql.png'
import thtml from '../../icons/html.png'
import tcss from '../../icons/css.png'
// iconos Franmework
import funity from '../../icons/unity.png'
import fc3 from '../../icons/construct3.png'
import fnjs from '../../icons/ndjs.png'
import freact from '../../icons/React.png'
import fbtp from '../../icons/bootstrap.png'
import fmysql from '../../icons/mysql.png'
import fmyd from '../../icons/myadmin.png'
import fntb from '../../icons/netb.png'
import fmdb from '../../icons/mdb.png'
import flrl from '../../icons/laravel.png'
import igit from '../../icons/git.png'
import igh from '../../icons/github.png'
import swin from '../../icons/win.png'
import slnx from '../../icons/linux.png' 

import next from '../../icons/paso.png'

export const ProjectsData = {
    'gameProject' : [
        [
            'Sub-Warrior',
            SWI,
            'https://franciscogaray.itch.io/subwarrior',
            'videojuego Retro, Sub warrior - simulador de submarino - Tecnología utilizada Construct - juégalo de manera online en teléfono o pc.',
            [fc3]
        ],
        [
            'He cuts grass',
            CPI,
            '#',
            'videojuego Retro, El corta pasto - Tecnología utilizada PHP nativo. Descárguelo y disfrute (para iniciar dentro de la carpeta en una terminal ejecute "php gameManager.php").',
            [lphp]
        ],
        [
            'Mediabal-Blast',
            MBM3,
            '#',
            'VideoJuego puzzle, Match-3 - Tecnologías utilizadas Unity y C#. Descárguelo y disfrute (solo Windows, Descomprima y ejecute el archivo mediabal-blast.exe).',
            [lcsharp,funity]
        ]
    ],
    'webProjects': [
        [
            'Analisis D-marck',
            DMRK,
            '#',
            'Aplicación web, administra y analiza informes DMARC (Domain-based Message Authentication, Reporting and Conformance). Datos graficados, detalles documentos, etc.',
            [lphp,ljs,thtml,tcss,flrl,fmysql]
        ],
        [
            'React-Login',
            RTL,
            'https://github.com/garay21/react-login-dashboard.git',
            'App Web con menú responsivo y login para acceso con autenticación.',
            [ljs,freact,thtml,tcss]           
        ],
        [
            'Formulario votaciones',
            IFRM,
            'https://github.com/garay21/Form_vote.git',
            'Formulario para omitir votos según los candidatos expuestos.',
            [lphp,ljs,lsql,fmysql,thtml,tcss]
        ],
        [
            'Notas View',
            NTS,
            '#',
            'Aplicación web, CRUD de notas personales(Agrega, actualiza, elimina y visualiza textos notas).',
            [ljs,freact,lsql,fmysql]
        ],
    ],
    'sqlProjects': [
        [
            'Titulo App',
            '',
            '#',
            '',
            []
        ],
    ],
    'mobileProjects' : [
        [
            'Titulo App',
            '',
            '#',
            '',
            []
        ],
    ]
};

export const SkillsData = {
    'lenguaje' : [
        lphp,ljava,ljs,lvb,lcsharp,lsql,
    ],
    'typeLeng' :[
        thtml,tcss
    ],
    'frameworks' : [
        funity,fc3,fnjs,freact,flrl,fbtp,fmysql,fmyd,fntb,fmdb,
    ],
    'systemOp':[
        swin,slnx
    ],
    'versionControl' : [
        igit,igh
    ]
};

