import AddToursModel from './addToursModel';
import AddFeedback from '../Common/feedbackModel';
import AdminLogin from './adminLoginModel'
import {sendEmail} from '../Common/email';

export const viewtours = (req, res) =>
  sendAllTours(res);

const sendAllTours = (res) => {
  AddToursModel.find((er, tours) => {
    if (!er) {
      res.send(tours);
    } else {
      res.send(er);
    }
  })
}

export const adminforgotPassword = (req, res) => {
  AdminLogin.find({"emailid":req.query.emailid}, (err, result) => {
    if (err) {
      res.send(err);
    }
     else {
      result.map(results => {
      const subject = 'Credentials Recived';
      const body = `username: ${results.username}<br>password: ${results.password}<br>Please Login Using these Credentials<br>Thank You.`;
      sendEmail(req.query.emailid, subject, body);
      })
      res.send(result);
    }
  })
}
export const updateProfile = (req, res) => {
  AdminLogin.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const fileuploadimages=(req,res) =>{
  app.post('/uploadphoto', upload.single('picture'), (req, res) => {
    var img = fs.readFileSync(req.file.path);
 var encode_image = img.toString('base64');
 var finalImg = {
      contentType: req.file.mimetype,
      image:  new Buffer(encode_image, 'base64')
   };
db.collection('quotes').insertOne(finalImg, (err, result) => {
    console.log(result)
 
    if (err) return console.log(err)
 
    console.log('saved to database')
    res.redirect('/')
   
     
  })
})
}

export const adminloginpage = (req, res) =>{
  AdminLogin.findOne( {"username":req.query.username,"password":req.query.password},(err,result)=> {
    res.send(result);
  })
}

export const searchTours = (req, res) => {
  AddToursModel.find({ sname: { '$regex' : req.query.string, '$options' : 'i' }}).exec((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}

export const addtours = (req, res) => {
  AddToursModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const viewfeedback = (req, res) =>
  sendAllfeedback(res);

const sendAllfeedback = (res) => {
  AddFeedback.find((er, feedback) => {
    if (!er) {
      res.send(feedback);
    } else {
      res.send(er);
    }
  })
}

export const destroy = (req, res) => {
  AddToursModel.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      sendAllTours(res);
    }
  });
}

export const update = (req, res) => {
  AddToursModel.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      sendAllTours(res);
    }
  })
}

export const show = (req, res) => {
  AddToursModel.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}
  