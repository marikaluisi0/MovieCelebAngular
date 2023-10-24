import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { celebrity } from 'src/app/shared/interfaces/celebrity.interface';


@Component({
  selector: 'app-list-cel',
  templateUrl: 'list.html',
})
export class List implements OnInit {
  @Input() celebritiesArray: celebrity[] = [];
  @Output() celebrity = new EventEmitter<string>(); 
  @Output() celebrityEdit = new EventEmitter<string>(); 
  @Output() celebrityDelete= new EventEmitter<string>();


  celebrityId: string = "";



  constructor(private readonly _router: Router,
    private readonly _route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      if (params && params.get('id')) {
        const id = params.get('id');
        if (id)
          this.celebrityId = id;
      }
    })
  }



  clickCelebrity(id: string) { //nella list //si
    this.celebrity.emit(id);
  }

  clickEdit(id: string) {
    this.celebrityEdit.emit(id);
  }

  clickDelete(id:string){
    this.celebrityDelete.emit(id);
  }







}



