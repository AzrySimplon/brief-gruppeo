import { Routes } from '@angular/router';
import {ListVisualizationComponent} from './components/list-visualization/list-visualization.component';
import {DropdownSelectionComponent} from './components/dropdown-selection/dropdown-selection.component';
import {DiscoveryComponent} from './components/discovery/discovery.component';
import {GroupVisualizationComponent} from './components/group-visualization/group-visualization.component';

export const routes: Routes = [
  {path: '', component: DiscoveryComponent},
  {path: 'lists', component: ListVisualizationComponent},
  {path: 'groups/:listId', component: GroupVisualizationComponent},];
