import React from 'react'
import './Mainpage.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Modal from '@mui/material/Modal';



const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
      title: 'Bed',
    },
    {
      img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
      title: 'Books',
    },
    {
      img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
      title: 'Sink',
    },
    {
      img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
      title: 'Kitchen',
    },
    {
      img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
      title: 'Blinds',
    },
    {
      img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
      title: 'Chairs',
    },
    {
      img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
      title: 'Laptop',
    },
    {
      img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
      title: 'Doors',
    },
    {
      img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
      title: 'Storage',
    },
    {
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      title: 'Candle',
    },
    {
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      title: 'Coffee table',
    },
  ];

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
  };

function Mainpage() {
    
    const [value, setValue] = React.useState(2);
    
    if (value > 3 ){
        console.log("value");
    }
    const [selectthem, setSelectthem] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setSelectthem(newValue);
    };

    function answer (){
        var first = document.getElementById("firstname").value;
        var last = document.getElementById("lastname").value;
        var message = "<h3>Thank you " + first + " " + last + ", we will get back to you as soon as possible.</h3>";
        document.getElementById('response').innerHTML = message;
    }

    window.addEventListener('load', () => {
        var button = document.getElementById("button-1");
        button.addEventListener('click',(e) => {
            e.preventDefault();
            answer();
        })
    })

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div>
            <div>
                <ul className='nav-list'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Forms</li>
                    <li>Questions</li>
                </ul>
            </div>
            <div className='the-header'>
                <h3 className='header'>Material UI practice</h3>
            </div>
            <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    A small hint
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Write a first and a last name to get a reply with the full name.
                </Typography>
                </Box>
            </Modal>
            </div>
            <div className='container mt-5'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="name" placeholder="Enter first name" id='firstname'/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSirName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="name" placeholder="Enter last name" id='lastname' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Select your gender</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                        <Button variant="primary" type="submit" id='button-1' onClick={answer}>
                            Submit
                        </Button>
                    </FormControl>
                </Form>
                <span id='response'></span>
                <Box
                    sx={{
                        '& > legend': { mt: 2 },
                    }}
                />
                <Typography 
                marginTop={3}
                component="legend"
                >
                    Please give us a rating
                </Typography>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                />
            </div>

            <div>
                <div className='container second-container'>
                    <BottomNavigation sx={{ width: "1" , border: 'solid 1px black' , borderRadius: "10px" , backgroundColor: "lightblue"  }} value={selectthem} onChange={handleChange}>
                        <BottomNavigationAction
                            label="Recents"
                            value="recents"
                            icon={<RestoreIcon />}
                        />
                        <BottomNavigationAction
                            label="Favorites"
                            value="favorites"
                            icon={<FavoriteIcon />}
                        />
                        <BottomNavigationAction
                            label="Nearby"
                            value="nearby"
                            icon={<LocationOnIcon />}
                        />
                        <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
                    </BottomNavigation>
                </div>
            </div>
            
            <div className='container first-container'>
                <ImageList sx={{ maxWidth: 700, maxHeight: 650 , position: 'relative' , position: 'absolute' , top: '100px', left: '30%'}}>
                    <ImageListItem key="Subheader" cols={2}>
                        <ListSubheader 
                        component="div"
                        sx={{color: 'white' , backgroundColor: 'Highlight' , fontSize: '18px'}}
                        >
                            Wish list
                        </ListSubheader>
                    </ImageListItem>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={item.author}
                                actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                >
                                    <InfoIcon />
                                </IconButton>
                                }
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>


        </div>
    )
}
export default Mainpage;