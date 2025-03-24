import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import useSignup from "@/hooks/auth/useSignup"
import { Eye, EyeClosed, Loader2 } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "sonner"

function Signup() {

  const {isSuccess, isPending, signupMutateAsync} = useSignup();

    const [userData, setUserData] = useState({
        email : "",
        password : "",
        description : ""
    });

    const [showPass, setShowPass] = useState(false);


    async function onSignupBtnClick() {
      if (isPending) return;
      if (userData.email.trim() == "" || userData.password.trim() == "") {
        toast("Please enter some data before submit")
        return;
      }
        await signupMutateAsync(userData);
    }

  return (
    <div className="flex items-center justify-center w-full max-w-lg min-h-screen bg-gray-900">
      <Card className="w-full md:p-6 py-5 bg-gray-800 dark:text-white shadow-xl rounded-2xl">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
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
            <Label htmlFor="description" className="text-gray-300 mb-2">
              Description
            </Label>
            <Input
              id="description"
              value={userData.description}
              type="text"
              placeholder="Tell us about yourself"
              onChange={(e) => setUserData(p => ({...p, description : e.target.value}))}
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
          <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-4 dark:text-white" onClick={onSignupBtnClick} disabled={isPending}>{isPending ? <Loader2 className="animate-spin"/> : "Sign up"}</Button>

          <p className="text-center">Already have an account? <Link to="/signin" className="text-blue-500 hover:underline">Sign In</Link></p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Signup
