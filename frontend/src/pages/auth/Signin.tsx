import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";



function Signin() {

    const [userData, setUserData] = useState({
            email : "",
            password : "",
        });
    
        const [showPass, setShowPass] = useState(false);


  return (
    <div className="flex items-center justify-center w-full max-w-lg min-h-screen bg-gray-900">
      <Card className="w-full p-6 bg-gray-800 dark:text-white shadow-xl rounded-2xl">
        <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-gray-300 mb-2">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={userData.email}
              required
              onChange={(e) => setUserData(p => ({...p, email : e.target.value}))}
              placeholder="Enter your email"
              className="mt-1 bg-gray-700 border-gray-600 text-white focus:ring-blue-500"
            />
          </div>
        
          <div>
            <Label htmlFor="password" className="text-gray-300 mb-2">
              Password
            </Label>
            <div className ="flex items-center justify-between gap-1">
            <Input
              id="password"
              value={userData.password}
              type={showPass ? "text" : "password"}
              required
              placeholder="Enter your password"
              onChange={(e) => setUserData(p => ({...p, password : e.target.value}))}
              className="mt-1 bg-gray-700 border-gray-600 text-white focus:ring-blue-500"
            />
            <Button className="mt-1" onClick={() => setShowPass(!showPass)} variant={"secondary"}>{showPass ? <EyeClosed/> : <Eye/>}</Button>
            </div>
          </div>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-4 dark:text-white">Sign Up</Button>
          <p className="text-center">Don&apos;t have an account? <Link to="/signup" className="text-blue-500 hover:underline">Signup</Link></p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Signin
