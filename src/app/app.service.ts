import { Injectable, Input } from '@angular/core';
import { FactoryService } from './lib/factory.service';
import { User } from './lib/user';
import { ApiAdapterNew } from './lib/api-adapter-new';
import { ApiAdapterOld } from './lib/api-adapter-old';
import { ApiAdapterDefault } from './lib/api-adapter-default';

// export const ADAPTER_TYPE = 'old-adapter';
export const ADAPTER_TYPE = 'new-adapter';

// export const ADAPTER_TYPE = 'default-adapter';

@Injectable()
export class AppService {
    concreteFactory: ApiAdapterNew | ApiAdapterOld | ApiAdapterDefault;
    result: User;

    constructor(private factory: FactoryService) {
    }

    @Input() adapterType: string;

    getUser() {
        this.concreteFactory.execute()
            .subscribe((result) => {
                console.dir(result);
                this.result = result;
            });
    }


    setFactory(type: string) {
        this.concreteFactory = this.factory.createConcrete(type);
        return this;
    }
}
