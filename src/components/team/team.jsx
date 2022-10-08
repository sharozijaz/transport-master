import maskGroup2 from "../../assets/Mask-Group-2.png";
import "./team.scss";
const Team = () => {
  return (
    <>
      <div className="team">
        <div className="team-heading">
          <h1>Meet Our Team</h1>
        </div>
        <div className="team-cards">
          <div className="team-card">
            <div className="team-img">
              <img src={maskGroup2} alt="" />
            </div>
            <div className="team-text-name">
              <h4>Jon Doe</h4>
            </div>
            <div className="team-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              quas dicta voluptatum nisi, omnis rem fugiat fugit sunt, velit
              consequuntur, nesciunt vitae laboriosam nemo cum vel nulla. Quia,
              magnam eligendi.
            </div>
          </div>
          <div className="team-card">
            <div className="team-img">
              <img src={maskGroup2} alt="" />
            </div>
            <div className="team-text-name">
              <h4>Jon Doe</h4>
            </div>
            <div className="team-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              quas dicta voluptatum nisi, omnis rem fugiat fugit sunt, velit
              consequuntur, nesciunt vitae laboriosam nemo cum vel nulla. Quia,
              magnam eligendi.
            </div>
          </div>
          <div className="team-card">
            <div className="team-img">
              <img src={maskGroup2} alt="" />
            </div>
            <div className="team-text-name">
              <h4>Jon Doe</h4>
            </div>
            <div className="team-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              quas dicta voluptatum nisi, omnis rem fugiat fugit sunt, velit
              consequuntur, nesciunt vitae laboriosam nemo cum vel nulla. Quia,
              magnam eligendi.
            </div>
          </div>
        </div>
        <div className="team-group">
          <div className="team-group-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              alias deleniti sapiente adipisci quia quos ducimus dolorem
              incidunt tenetur doloremque, nulla recusandae eos at consectetur
              error accusantium perferendis illo obcaecati?
            </p>
          </div>
          <div className="team-group-img">
            <img src={maskGroup2} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
