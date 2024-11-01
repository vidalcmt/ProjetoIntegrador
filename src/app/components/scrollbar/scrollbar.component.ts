import { Component } from '@angular/core';
import { NbSidebarModule, NbLayoutModule, NbMenuModule } from '@nebular/theme';

@Component({
  selector: 'app-scrollbar',
  standalone: true,
  imports: [NbMenuModule, NbLayoutModule, NbSidebarModule],
  templateUrl: './scrollbar.component.html',
  styleUrl: './scrollbar.component.scss'
})
export class ScrollbarComponent {
  menuItems = [
    {
      title: 'Estoque',
      icon: 'settings-outline',
      link: '/estoque',
    },
    {
      title: 'Usuários',
      icon: 'people-outline',
      children: [
        {
          title: 'Adicionar Usuário',
          link: '/usuarios/adicionar',
        },
        {
          title: 'Listar Usuários',
          link: '/usuarios/listar',
        },
        {
          title: 'Configurações',
          link: '/usuarios/configuracoes',
        },
      ],
    },
  ];
}
