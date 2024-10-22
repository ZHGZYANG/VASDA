import { NgModule } from "@angular/core";
import { MenuGridComponent } from "./menu-grid/menu-grid.component";
import { TabBarComponent } from "./tab-bar/tab-bar.component";
import { SlideshowComponent } from "./slideshow/slideshow.component";
import { IonicModule, IonContent } from "@ionic/angular";
import { ShowHideComponent } from "./show-hide/show-hide.component";
import { BackButtonComponent } from "./back-button/back-button.component";

@NgModule({
    declarations: [MenuGridComponent,TabBarComponent,SlideshowComponent, ShowHideComponent, BackButtonComponent],
    imports: [IonicModule.forRoot()],
    exports: [MenuGridComponent,TabBarComponent,SlideshowComponent, ShowHideComponent,BackButtonComponent]
})
export class ComponentsModule{}