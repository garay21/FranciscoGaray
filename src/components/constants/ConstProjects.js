// imagenes de projectos
import SWI from '../../icons/projectsImage/subwarrior.png'
import CPI from '../../icons/projectsImage/cutpast.png'
import MBM3 from '../../icons/projectsImage/match3.png'
import DMRK from '../../icons/projectsImage/dmarc.png'

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
            'video Juego Retro, Sub warrior - simulador de submarino - Tecnologia utilizada Construct - juegalo de manera online en telefono o pc.',
            [fc3]
        ],
        [
            'He cuts grass',
            CPI,
            '#',
            'Video Juego Retro, El corta pasto - Tecnologia utilizada PHP nativo. Descarguelo y disfrute (para iniciar dentro de la carpeta en una terminal ejecute "php gameManager.php")',
            [lphp]
        ],
        [
            'Mediabal-Blast',
            MBM3,
            '#',
            'Video Juego puzzle, Match-3 - Tecnologias utilizadas Unity y C#. Descarguelo y disfrute (solo Windows, Descomprima y ejecute el archivo mediabal-blast.exe)',
            [lcsharp,funity]
        ]
    ],
    'webProjects': [
        [
            'Analisis D-marck',
            DMRK,
            '#',
            'Aplicacion web, administra y analiza informes DMARC (Domain-based Message Authentication, Reporting and Conformance). Datos graficados, detalles documentos, etc.',
            [lphp,thtml,tcss,flrl]
        ],
        [
            'React-Login',
            '',
            '#',
            '',
            [ljs,freact,]           
        ],
        [
            'Titulo App',
            '',
            '#',
            '',
            []
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

