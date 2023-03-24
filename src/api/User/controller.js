import User from './registrationModel';
import AddBooking from './bookingModel';
import AddToursModel from '../Admin/addToursModel';
import {sendEmail} from '../Common/email';
import AddFeedback from '../Common/feedbackModel';

export const registration = (req, res) => {
  User.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const subject = 'Tours and Travels Registration';
      const body = `You are Successfully Registerd<br>Thank You.`;
      sendEmail(req.body.email, subject, body);
      res.send(result);

    }
  })
}
export const forgotPassword = (req, res) => {
  User.find({"emailid":req.query.emailid}, (err, result) => {
    if (err) {
      res.send(err);
    }
     else {
      result.map(results => {
      const subject = 'Credentials Recived';
      const body = `mobileno: ${results.mobileno}<br>Password: ${results.password}<br>Please Login Using these Credentials<br>Thank You.`;
      sendEmail(req.query.emailid, subject, body);
      })
      res.send(result);
    }
  })
}


export const userloginpage = (req, res) =>{
	User.findOne( {"mobileno":req.query.mobileno,"password":req.query.password},(err,result)=> {
    res.send(result);
	})
}

export const addfeedback = (req, res) => {
  AddFeedback.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const gettours = (req, res) =>{
  AddToursModel.findOne( {"tourname":req.query.tourname},(err,result)=> {
    res.send([result].map(record =>{
      return record;
    }));
   
  })
}

export const viewalluserbookings = (req, res) =>
  sendAllBookings(res);

const sendAllBookings = (res) => {
  AddBooking.find((er, tours) => {
    if (!er) {
      res.send(tours);
    } else {
      res.send(er);
    }
  })
}


export const viewbooking = (req, res) =>
sendAllBooking(res);

  const sendAllBooking = (res) => {
    AddBooking.find((er, tours) => {
      if (!er) {
        res.send(tours);
      } else {
        res.send(er);
      }
    })
  }

  export const chnagepassword = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
      if (err) {
        res.send(err);
      } else {
        res.send(updatedObj);
      }
    })
  }

  export const viewuserbookings = (req, res) =>{
    AddBooking.find( {"userno":req.query.userno},(err,result)=> {
      res.send(result.map(record =>{
        return record;
      }));
     
    })
  }


  export const update = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
      if (!err) {
        res.send(updatedObj);
      } 
    })
  }

export const login = (req, res) =>{
  User.find( {"mobileno":req.query.mobileno,"password":req.query.password},(err,result)=> {
   if(!result)
   {
     res.send("Login Failed");
   }
   else
   {
    res.send("Login Success");
   }
    
  })
}

export const addbooking = (req, res) => {
  AddBooking.create(req.body, (err, result) => {
    console.log(req.body);
    if (err) {
      res.send(err);
    } else {
      const subject = 'Tours and Travels Booking';
      const body = `Your Booking Details:<br>TourName:${req.body.tourname}<br>Source:${req.body.source}<br>Destination: ${req.body.price}<br>No.of.Days:${req.body.noofdays}<br>Total Amount:${req.body.totalamount}<br>DateofJourney${req.body.dateofjourney}<br>Thank You.`;
      sendEmail(req.body.email, subject, body);
      res.send(result);
    }
  })
}
