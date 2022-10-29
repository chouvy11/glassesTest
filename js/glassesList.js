export class GlassesList{
    constructor() {
        this.glist = []; 
    }
    addGlasses(glasses) {
        this.glist.push(glasses);
    }
    renderGlasses() {//tao cac the html hien thi ra man hinh
        //chua tap hop cac the html
        let content = "";
        content = this.glist.reduce((glcontent, item) => {
            glcontent += `
                <div class="col-4">
                    <img class = "img-fluid vglasses__items" onclick="tryOnGlasses(event)" data-id ="${item.id}" src = "${item.src}">
                </div>
            `;
            return glcontent;
        }, '');
        return content; 
    }
}