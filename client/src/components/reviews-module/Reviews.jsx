import {BsStarFill} from 'react-icons/all'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from "react-bootstrap/Button";

const Reviews = () => {
  return (
  <div id="reviews-module">
      <div id='total-reviews'>
          <BsStarFill/> <a style={{fontSize:'18px'}}>4.90 · 425 reviews</a>
      </div>
      <div id='reviews-bars'>
      <div id='reviews-bar'>
          <div style={{marginRight:'120px'}}>
            <p > Cleanliness</p>
          </div>
            <ProgressBar style={{width:'200px',height:'5px'}} variant="secondary" now={95} />
            <p>4.8</p>
        </div>
        <div id='reviews-bar'>
            <div style={{marginRight:'120px'}}>
              <p> Communication</p>
            </div>
            <ProgressBar style={{width:'200px',height:'5px'}} variant="secondary" now={97} />
            <p>4.9</p>
        </div>
        <div id='reviews-bar'> 
            <div style={{marginRight:'135px'}}>
              <p> Check-in</p>
            </div>
          <ProgressBar style={{width:'200px',height:'5px'}} variant="secondary" now={100} />
          <p>5.0</p>
        </div>
        <div id='reviews-bar'>
            <div style={{marginRight:'165px'}}>
              <p> Accuracy</p>
            </div>
            <ProgressBar style={{width:'200px',height:'5px'}} variant="secondary" now={97} />
            <p>4.9</p>
        </div>
        <div id='reviews-bar'>
            <div style={{marginRight:'138px'}}>
              <p> Location</p>
            </div>
            <ProgressBar style={{width:'200px',height:'5px'}} variant="secondary" now={97} />
            <p>4.9</p>
        </div>
        <div id='reviews-bar'>
            <div style={{marginRight:'190px'}}>
              <p> Value</p>
            </div>
            <ProgressBar style={{width:'200px',height:'5px'}} variant="secondary" now={95} />
            <p>4.8</p>
        </div>
      </div>
      <div id='reviews-box'>
        <div id='reviews-comment'>
            <div id='reviews-profile'>
    
                <img style={{borderRadius:'50%',height:'40px',width:'40px'}}
                  src='https://a0.muscache.com/im/pictures/user/95930d49-e295-4718-9374-49803fb6b99e.jpg?im_w=240'>
                </img>
                <div>
                <h5>Justin</h5>
                <p> December 2022</p>
                </div>
              </div>
            <div>
                <a>This was our second trip here and it didn't disappoint. 
                If you're looking to relax and unwind this is the place.
                  I'm already thinking about the next time we can come back.</a>
            </div>
          </div>
          <div id='reviews-comment1'>
            <div id='reviews-profile'>
                <img style={{borderRadius:'50%',height:'40px',width:'40px'}}
                  src='https://a0.muscache.com/im/pictures/user/251ff1cd-7d2e-4bf8-ae21-3ab287ef5ca9.jpg?im_w=240'>
                </img>
                <div>
                <h5>Jasmine</h5>
                <p> December 2022</p>
                </div>
              </div>
            <div>
                <a>It's a beautiful stay. The grounds are lush and green.
                   Our cabin was in between swamp and river, giving us privacy and
                    immersion into nature. In the morning, the cows mooing was...</a>
                  <div>
                    <b>
                    <u>Show More </u>
                    </b>
                  </div>
            </div>
          </div>
          <div id='reviews-comment'>
            <div id='reviews-profile'>
                <img style={{borderRadius:'50%',height:'40px',width:'40px'}}
                  src='https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240'>
                </img>
                <div>
                  <h4>Ernest</h4>
                  <p> December 2022</p>
                </div>
              </div>
            <div>
                <a>Beautiful and very romantic! Everything is set away from other people.
                   Perfect place to spend time and focus on your group and enjoy nature!</a>
            </div>
          </div>
          <div id='reviews-comment1'>
            <div id='reviews-profile'>
                <img style={{borderRadius:'50%',height:'40px',width:'40px'}}
                  src='https://a0.muscache.com/im/pictures/user/34f63e31-5843-4e13-9366-0dec89c9d515.jpg?im_w=240'>
                </img>
                <div>
                  <h4>Kelli</h4>
                  <p> December 2022</p>
                </div>
              </div>
            <div>
                <a>This place was absolutely perfect! 
                  Exactly has described and couldn’t not have chosen a better spot
                   for our anniversary weekend.</a>
            </div>
          </div>
          <div id='reviews-comment'>
            <div id='reviews-profile'>
                <img style={{borderRadius:'50%',height:'40px',width:'40px'}}
                  src='https://a0.muscache.com/im/pictures/user/f1ab1d52-5790-43a6-be94-7be0dd366821.jpg?im_w=240'>
                </img>
                <div>
                  <h4>Brad</h4>
                  <p> December 2022</p>
                </div>
              </div>
            <div>
                <a>Amazing place, extremely beautiful, and very peaceful!! 
                  Extremely nice people would recommend for anyone wanting to
                   recharge and love nature!</a>
            </div>
          </div>
          <div id='reviews-comment1'>
            <div id='reviews-profile'>
                <img style={{borderRadius:'50%',height:'40px',width:'40px'}}
                  src='https://a0.muscache.com/im/pictures/user/44780bdf-b378-4092-a9f8-800b7927329f.jpg?im_w=240'>
                </img>
                <div>
                <h4>Kacie</h4>
                <p> December 2022</p>
                </div>
              </div>
            <div>
                <a>So beautiful and romantic ❤️😊 perfect for our anniversary</a>
            </div>
          </div>
      </div>
      <div>
      <Button
          id="show-all-reviews"
          variant="light"
          >Show all 425 reviews
        </Button>
      </div>
  </div>
  );
};

export default Reviews;
