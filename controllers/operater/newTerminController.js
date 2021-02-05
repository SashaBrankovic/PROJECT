const mongojs=require('mongojs');
const db=mongojs("PROJECT",["termini"]);

const newTerminController=(req,res)=>{
    db.termini.insert({
        ime_stranke:req.body.ime_stranke,
        prezime_stranke:req.body.prezime_stranke,
        godiste_stranke:req.body.godiste_stranke,
        ime_supruznika:req.body.ime_supruznika,
        prezime_supruznika:req.body.prezime_supruznika,
        godiste_supruznika:req.body.godiste_supruznika,
        fiksni_telefon:req.body.fiksni_telefon,
        mobilni_telefon:req.body.mobilni_telefon,
        adresa:req.body.adresa,
        datum_termina:req.body.datum_termina,
        vreme_termina:req.body.vreme_termina,
        savetnik:req.body.ime_savetnika,
        naziv_mesta:req.body.naziv_mesta,
        deca:req.body.deca,
        operacije:req.body.operacije,
        terapije:req.body.terapije,
        napomena:req.body.napomena,
        active:true,
        vrednost_ugovora:0,
        razlog:"",
        ulaz:false,
        proizvod:"",
        operater:req.session.user.first_name+" "+req.session.user.last_name
    },(error,data)=>{
       res.redirect("/operater")
    })
}
module.exports=newTerminController;