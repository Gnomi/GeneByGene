import { Component, OnInit } from '@angular/core';

import { HeroService } from '../../service/hero.service';
import { User } from "../../models/user";

@Component({
    selector: 'my-app',
    template: require('./hero.component.html'),
    providers: [HeroService]
})



export class HeroComponent implements OnInit {

    title = 'Tour of Heroes';
    users: User[];
    selectedUser: User;

    constructor(private heroService: HeroService) { }
    ngOnInit(): void {
        this.getHeroes();
    }
    getHeroes(): void {
        //this.users= this.heroService.loadUser();
        this.heroService.getHeroes().then(a => this.users = a);
    }

    onSelect(user: User): void {
        this.selectedUser = user;
    }
}


 