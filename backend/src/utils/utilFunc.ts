export function generateUsername(email : string) {
    if (!email.includes("@")) throw new Error("Invalid email format");
  
    const baseName = email.split("@")[0].replace(/[^a-zA-Z0-9]/g, "");
    const timestamp = Date.now().toString().slice(-5); 
  
    let username = baseName.slice(0, 8) + timestamp; 
    return username;
  }
  