import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShoppingListComponent } from "src/app/shopping-list/shopping-list.component";
import { RecipesComponent } from "src/app/recipes/recipes.component";
import { RecipeDetailComponent } from "src/app/recipes/recipe-detail/recipe-detail.component";
import { HeaderComponent } from "src/app/header/header.component";
import { AppComponent } from "src/app/app.component";
import { RecipeSelectComponent } from "src/app/recipes/recipe-select/recipe-select.component";
import { RecipeEditComponent } from "src/app/recipes/recipe-edit/recipe-edit.component";
const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'shopping-list', component: ShoppingListComponent},
    { 
        path: 'recipes', 
        component: RecipesComponent, 
        children: [
            { path: '', component: RecipeSelectComponent},
            { path: 'new', component: RecipeEditComponent},
            { path: ':id', component: RecipeDetailComponent},
            { path: ':id/edit', component: RecipeEditComponent}
        ]},
    {path: '**', redirectTo: '/not-found'}
]
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}