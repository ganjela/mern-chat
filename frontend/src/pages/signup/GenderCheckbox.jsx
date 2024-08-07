const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
	return (
		<div className='flex'>
			<div className="form-control">
            <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
                <span className="label-text">Male</span>
                <input type="checkbox" defaultChecked className="checkbox checkbox-error" 
                checked={selectedGender === "male"}
                onChange={() => onCheckboxChange("male")}
                />
                
            </label>
            </div>
			<div className="form-control">
            <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
                <span className="label-text">Female</span>
                <input type="checkbox" defaultChecked className="checkbox checkbox-error" 
                checked={selectedGender === "female"}
                onChange={() => onCheckboxChange("female")}
                />
            </label>
            </div>
		</div>
	);
};
export default GenderCheckbox;