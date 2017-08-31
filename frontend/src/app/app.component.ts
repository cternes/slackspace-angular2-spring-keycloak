import { Contract } from './shared/model/contract.model';
import { ContractService } from './shared/service/contract.service';
import { User } from './shared/model/user.model';
import { KeycloakService } from './shared/service/keycloak.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    profile: User;
    contracts: Contract[];

    constructor(private keycloakService: KeycloakService,
        private contractService: ContractService) {
    }

    public ngOnInit(): void {
        this.profile = this.keycloakService.getUser();
    }

    public isManager(): boolean {
        return this.keycloakService.hasAnyRole(['manager']);
    }

    public isAdmin(): boolean {
        return this.keycloakService.hasAnyRole(['admin']);
    }

    public getContracts() {
        this.contractService.getContracts().subscribe(
            data => {
                this.contracts = data;
            }
        );
    }

    public logout() {
        this.keycloakService.logout();
    }
}
